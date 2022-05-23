
export class Gateway {

    constructor() {}

    async createNumberMap(phoneNumber: string, home: string): Promise<NumberMap> {
        const map = new NumberMap();
        map.phoneNumber = phoneNumber;
        map.home = home;
        return await map.save();
    }

    async getHomeDestination(phoneNumber: string): Promise<string> {
        const map = await NumberMap.findOneOrFail({
            where: {
                phoneNumber: phoneNumber
            }
        });

        return map.home;
    }

}