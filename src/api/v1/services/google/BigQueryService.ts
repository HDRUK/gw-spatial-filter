const { BigQuery } = require('@google-cloud/bigquery');

export default class BigQueryService {
    _bigquery;
    _query;
    _table;
    // query;
    constructor() {
        this._table = `${process.env.BIG_QUERY_PROJECT_ID}.${process.env.BIG_QUERY_DATABASE}.${process.env.BIG_QUERY_TABLE}`;
        this._bigquery = new BigQuery({
            projectId: process.env.BIG_QUERY_PROJECT_ID,
        });
    }

    setQuery(statement: string): void {
        this._query = statement;
    }

    async query() {
        console.log(`BigQueryService `, this._query);
        const options = {
            query: this._query,
        };

        // Run the query as a job
        const [job] = await this._bigquery.createQueryJob(options);

        try {
            // Wait for the query to finish
            const [rows] = await job.getQueryResults();

            // Print the results
            return rows;
            // rows.forEach(row => console.log(row));
        } catch (err) {
            throw new Error((<Error>err).message);
        }
    }
}
