import { QueryBuilder } from './builder';

describe('Builder Pattern - Query Builder', () => {
    test('It should throw an error if no table is specified', () => {
        const queryBuilder = new QueryBuilder();
        expect(() => queryBuilder.build()).toThrow(
            'Table name is not specified'
        );
    });
    test('It should create a query with default select *', () => {
        const query = new QueryBuilder().from('users').build();
        expect(query).toBe('SELECT * FROM users');
    });
    test('It should create a simple select query', () => {
        const query = new QueryBuilder()
            .select('name', 'age')
            .from('users')
            .build();
        expect(query).toBe('SELECT name, age FROM users');
    });
    test('It should create a select query with where condition', () => {
        const query = new QueryBuilder()
            .select('id', 'name')
            .from('users')
            .where('age', '>', 18)
            .build();
        expect(query).toBe("SELECT id, name FROM users WHERE age > '18'");
    });
    test('It should create a select query with multiple where conditions', () => {
        const query = new QueryBuilder()
            .select('id', 'email')
            .from('users')
            .where('age', '>', 18)
            .where('name', '=', 'John')
            .build();
        expect(query).toBe(
            "SELECT id, email FROM users WHERE age > '18' AND name = 'John'"
        );
    });
    test('It should create a select query with order by', () => {
        const query = new QueryBuilder()
            .select('name', 'age')
            .from('users')
            .orderBy('name')
            .build();
        expect(query).toBe('SELECT name, age FROM users ORDER BY name');
    });
});
