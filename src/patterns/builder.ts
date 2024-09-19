export type QueryOperator = '=' | '>' | '<' | '>=' | '<=';

export class QueryBuilder {
    private fields: string[] = [];
    private table: string = '';
    private conditions: string[] = [];
    private orderByField: string = '';

    public select(...fields: string[]): this {
        this.fields = fields;
        return this;
    }
    public from(table: string): this {
        this.table = table;
        return this;
    }
    public where(
        field: string,
        operator: QueryOperator,
        value: string | number
    ): this {
        this.conditions.push(`${field} ${operator} '${value}'`);
        return this;
    }
    public orderBy(field: string): this {
        this.orderByField = field;
        return this;
    }
    public build(): string {
        if (!this.table) {
            throw new Error('Table name is not specified');
        }

        const fields = this.fields.length ? this.fields.join(', ') : '*';
        const query = [`SELECT ${fields} FROM ${this.table}`];
        if (this.conditions.length) {
            query.push(`WHERE ${this.conditions.join(' AND ')}`);
        }
        if (this.orderByField) {
            query.push(`ORDER BY ${this.orderByField}`);
        }
        return query.join(' ');
    }
}
