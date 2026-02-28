/**
 * ItemPopover — backdrop wrapper for item detail in MDS Command Center.
 * Delegates body content to shared <ItemDetail variant="compact" />.
 */
import { useItemDetail } from '../pdpm-analyzer/hooks/useItemDetail.js';
import { ItemDetail } from '../../components/ItemDetail.jsx';

export function ItemPopover({ item, context, onClose }) {
  const mdsItem = item?.mdsItem;
  const categoryKey = item?.categoryKey;
  const { data, loading, error } = useItemDetail(mdsItem, categoryKey, context);
  const displayCode = mdsItem?.startsWith('I8000:') ? 'I8000' : mdsItem;

  return (
    <div class="cc-pop__backdrop" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div class="cc-pop" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div class="cc-pop__header">
          <div class="cc-pop__header-top">
            <div class="cc-pop__header-left">
              <span class="cc-pop__code">{displayCode}</span>
              <span class="cc-pop__name">{item?.itemName || data?.item?.description || 'Item Detail'}</span>
            </div>
            <button class="cc-pop__close" onClick={onClose} type="button">&times;</button>
          </div>
        </div>

        {/* Body */}
        <div class="cc-pop__body">
          {loading && (
            <div class="cc-pop__loading">
              <div class="mds-cc__spinner mds-cc__spinner--sm" />
              <span>Loading...</span>
            </div>
          )}
          {error && <div class="cc-pop__error">{error}</div>}
          {!loading && !error && data && (
            <ItemDetail
              variant="compact"
              data={data}
              detectionItem={item}
              mdsItem={mdsItem}
            />
          )}
        </div>
      </div>
    </div>
  );
}
