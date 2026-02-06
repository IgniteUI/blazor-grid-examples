import type { DataController } from '../controllers/data.js';
import type { ComboRecord } from '../types.js';
export default class GroupDataOperation<T extends object> {
    apply(data: ComboRecord<T>[], controller: DataController<T>): ComboRecord<T>[];
}
