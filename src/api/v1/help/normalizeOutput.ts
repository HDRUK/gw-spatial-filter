export default function normalizeOutput(array: Array<string>) {
    return array.map((object) => {
        return {
            location: object['name'],
            hierarchy: [
                object['country'],
                object['level_one'],
                object['level_two'],
                object['level_three'],
            ]
                .filter(Boolean)
                .join(','),
        };
    });
}
