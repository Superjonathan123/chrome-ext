import { useMemo } from 'preact/hooks';

/**
 * Compact sidebar item showing category name, MDS code, and Dx/Tx status.
 */
const SidebarItem = ({ item, isActive, isChecked, onSelect, onToggleCheck }) => {
  const name = item.pdpmCategoryName || item.mdsItemName || item.mdsItem;
  const isQueryRecommended = item.solverStatus === 'needs_physician_query';
  const hasExistingQuery = !!item.existingQuery;

  const handleCheck = (e) => {
    e.stopPropagation();
    if (!hasExistingQuery) {
      onToggleCheck(item.mdsItem);
    }
  };

  return (
    <div
      className={`qi-sidebar__item${isActive ? ' qi-sidebar__item--active' : ''}${isQueryRecommended ? ' qi-sidebar__item--query' : ''}`}
      onClick={() => onSelect(item.mdsItem)}
    >
      <div className="qi-sidebar__item-check" onClick={handleCheck}>
        <input
          type="checkbox"
          checked={isChecked}
          disabled={hasExistingQuery}
          readOnly
        />
      </div>
      <div className="qi-sidebar__item-info">
        <div className="qi-sidebar__item-name">{name}</div>
        <div className="qi-sidebar__item-meta">
          <span className="qi-sidebar__item-code">{item.mdsItem}</span>
          {item.pdpmComponent && (
            <span className="qi-sidebar__item-component">{item.pdpmComponent}</span>
          )}
        </div>
        {/* Compact Dx/Tx indicators */}
        <div className="qi-sidebar__item-steps">
          {item.diagnosisSummary !== undefined && (
            <span className={`qi-sidebar__step qi-sidebar__step--${item.diagnosisPassed ? 'pass' : 'fail'}`}>
              {item.diagnosisPassed ? '\u2713' : '\u2717'} Dx
            </span>
          )}
          {item.treatmentSummary !== undefined && (
            <span className={`qi-sidebar__step qi-sidebar__step--${item.activeStatusPassed ? 'pass' : 'fail'}`}>
              {item.activeStatusPassed ? '\u2713' : '\u2717'} Tx
            </span>
          )}
          {item.existingQuery && (
            <span className={`qi-sidebar__query-pill qi-sidebar__query-pill--${item.existingQuery.status}`}>
              {item.existingQuery.status}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

/**
 * Left sidebar: compact scrollable list of items grouped by status.
 */
export const ItemSidebar = ({ items, activeItem, onSelect, isChecked, onToggleCheck, dismissedItems }) => {
  const { queryItems, onMdsItems, canCodeItems, reviewItems } = useMemo(() => {
    const query = [];
    const onMds = [];
    const canCode = [];
    const review = [];
    for (const item of items) {
      if (dismissedItems.has(item.mdsItem)) continue;
      if (item.solverStatus === 'needs_physician_query') {
        query.push(item);
      } else if (item.solverStatus === 'needs_review') {
        review.push(item);
      } else if (item.codedOnMds) {
        onMds.push(item);
      } else {
        canCode.push(item);
      }
    }
    return { queryItems: query, onMdsItems: onMds, canCodeItems: canCode, reviewItems: review };
  }, [items, dismissedItems]);

  return (
    <div className="qi-sidebar">
      {/* Needs Query */}
      {queryItems.length > 0 && (
        <div className="qi-sidebar__group">
          <div className="qi-sidebar__group-header qi-sidebar__group-header--query">
            <span>Needs Query</span>
            <span className="qi-sidebar__group-count">{queryItems.length}</span>
          </div>
          {queryItems.map(item => (
            <SidebarItem
              key={item.mdsItem}
              item={item}
              isActive={activeItem === item.mdsItem}
              isChecked={isChecked(item.mdsItem)}
              onSelect={onSelect}
              onToggleCheck={onToggleCheck}
            />
          ))}
        </div>
      )}

      {/* Can Code (not yet on MDS) */}
      {canCodeItems.length > 0 && (
        <div className="qi-sidebar__group">
          <div className="qi-sidebar__group-header qi-sidebar__group-header--can-code">
            <span>Can Code</span>
            <span className="qi-sidebar__group-count">{canCodeItems.length}</span>
          </div>
          {canCodeItems.map(item => (
            <SidebarItem
              key={item.mdsItem}
              item={item}
              isActive={activeItem === item.mdsItem}
              isChecked={isChecked(item.mdsItem)}
              onSelect={onSelect}
              onToggleCheck={onToggleCheck}
            />
          ))}
        </div>
      )}

      {/* Needs Review */}
      {reviewItems.length > 0 && (
        <div className="qi-sidebar__group">
          <div className="qi-sidebar__group-header qi-sidebar__group-header--review">
            <span>Needs Review</span>
            <span className="qi-sidebar__group-count">{reviewItems.length}</span>
          </div>
          {reviewItems.map(item => (
            <SidebarItem
              key={item.mdsItem}
              item={item}
              isActive={activeItem === item.mdsItem}
              isChecked={isChecked(item.mdsItem)}
              onSelect={onSelect}
              onToggleCheck={onToggleCheck}
            />
          ))}
        </div>
      )}

      {/* On MDS */}
      {onMdsItems.length > 0 && (
        <div className="qi-sidebar__group">
          <div className="qi-sidebar__group-header qi-sidebar__group-header--on-mds">
            <span>On MDS</span>
            <span className="qi-sidebar__group-count">{onMdsItems.length}</span>
          </div>
          {onMdsItems.map(item => (
            <SidebarItem
              key={item.mdsItem}
              item={item}
              isActive={activeItem === item.mdsItem}
              isChecked={isChecked(item.mdsItem)}
              onSelect={onSelect}
              onToggleCheck={onToggleCheck}
            />
          ))}
        </div>
      )}
    </div>
  );
};
