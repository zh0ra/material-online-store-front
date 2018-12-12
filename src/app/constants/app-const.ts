const PROTOCOL = 'http';
const HOSTNAME = '127.0.0.1';
const PORT = 8181;
export class AppConst {
    public static servPath = `${PROTOCOL}://${HOSTNAME}:${PORT}`;

    public static countries = {
        'US': 'Unate State of America',
        'UA': 'Ukraine',
        'PL': 'Poland',
        'RU': 'Russion Federation'
    };
}
