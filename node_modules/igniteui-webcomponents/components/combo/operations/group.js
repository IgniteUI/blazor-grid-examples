const OrderBy = Object.freeze({ asc: 1, desc: -1 });
export default class GroupDataOperation {
    apply(data, controller) {
        const { groupingOptions: { groupKey, valueKey, displayKey, direction }, } = controller;
        if (!groupKey) {
            return data;
        }
        const grouped = Map.groupBy(data, (item) => item.value[groupKey] ?? 'Other');
        const keys = Array.from(grouped.keys());
        if (direction !== 'none') {
            const orderBy = OrderBy[direction];
            keys.sort((a, b) => orderBy * controller.compareCollator.compare(a, b));
        }
        return keys.flatMap((key) => {
            return [
                {
                    value: {
                        [valueKey]: key,
                        [displayKey]: key,
                        [groupKey]: key,
                    },
                    header: true,
                    dataIndex: -1,
                },
                ...(grouped.get(key) ?? []),
            ];
        });
    }
}
//# sourceMappingURL=group.js.map