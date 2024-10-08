/**
 * Extend the base Item document to support attributes and groups with a custom template creation dialog.
 * @extends {Item}
 */
export class ProphecyItem extends Item {
    static async create(data, options = {}) {
        // Replace default image
        if (data.img === undefined) data.img = CONFIG.PROPHECY.IMAGES[data.type];

        await super.create(data, options);
    }
}
