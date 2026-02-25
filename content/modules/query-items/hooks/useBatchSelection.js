import { useState, useCallback, useMemo } from 'preact/hooks';

/**
 * Hook for managing batch checkbox selection state
 * @param {Array} items - All query items
 * @param {Set} dismissedItems - Set of dismissed item mdsItem codes
 */
export function useBatchSelection(items, dismissedItems) {
  const [selectedIds, setSelectedIds] = useState(new Set());

  // Items that are selectable (no existing query, not dismissed)
  // Coded items ARE selectable — user may still want to query them
  const selectableItems = useMemo(() => {
    return items.filter(item =>
      !item.existingQuery &&
      !dismissedItems.has(item.mdsItem)
    );
  }, [items, dismissedItems]);

  const toggle = useCallback((mdsItem) => {
    setSelectedIds(prev => {
      const next = new Set(prev);
      if (next.has(mdsItem)) {
        next.delete(mdsItem);
      } else {
        next.add(mdsItem);
      }
      return next;
    });
  }, []);

  const selectAllQueryable = useCallback(() => {
    const queryableIds = selectableItems
      .filter(item => item.solverStatus === 'needs_physician_query')
      .map(item => item.mdsItem);
    setSelectedIds(new Set(queryableIds));
  }, [selectableItems]);

  const deselectAll = useCallback(() => {
    setSelectedIds(new Set());
  }, []);

  const isSelected = useCallback((mdsItem) => {
    return selectedIds.has(mdsItem);
  }, [selectedIds]);

  const selectedItems = useMemo(() => {
    return items.filter(item => selectedIds.has(item.mdsItem));
  }, [items, selectedIds]);

  return {
    selectedIds,
    selectedItems,
    selectedCount: selectedIds.size,
    selectableCount: selectableItems.length,
    toggle,
    selectAllQueryable,
    deselectAll,
    isSelected
  };
}
