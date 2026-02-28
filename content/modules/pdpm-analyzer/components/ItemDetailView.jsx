/**
 * ItemDetailView — detail sub-view in PDPM Analyzer.
 * Delegates body content to shared <ItemDetail variant="full" />.
 */
import { useItemDetail } from '../hooks/useItemDetail.js';
import { ItemDetail } from '../../../components/ItemDetail.jsx';

export function ItemDetailView({ item, context, onBack }) {
  const mdsItem = item?.mdsItem;
  const categoryKey = item?.categoryKey;
  const { data, loading, error } = useItemDetail(mdsItem, categoryKey, context);
  const displayCode = mdsItem?.startsWith('I8000:') ? 'I8000' : mdsItem;

  const apiItem = data?.item;
  const needsQuery = apiItem?.status === 'needs_physician_query';

  return (
    <div class="idv">
      {/* Header with back button */}
      <div class="idv__head">
        <button class="idv__back" onClick={onBack} type="button">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          Back
        </button>
        <span class="idv__code">{displayCode}</span>
        <h2 class="idv__name">{apiItem?.description || apiItem?.kbCategory?.categoryName || item?.itemName || 'Item Detail'}</h2>
        {needsQuery && <span class="idv__badge idv__badge--amber">Needs Query</span>}
      </div>

      {loading && <div class="pdpm-an__state"><div class="pdpm-an__spinner" /><p>Loading...</p></div>}
      {error && <div class="pdpm-an__state"><p>{error}</p></div>}

      {!loading && !error && data && (
        <div class="idv__body">
          <ItemDetail
            variant="full"
            data={data}
            detectionItem={item}
            mdsItem={mdsItem}
          />
        </div>
      )}
    </div>
  );
}
