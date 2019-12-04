export default class ModelOffers {
  constructor(data) {
    this.id = data.id;
    this.city = {};
    this.city.name = data.city.name;
    this.city.coordinates = [data.city.location.latitude, data.city.location.longitude];
    this.city.zoom = data.city.location.zoom;
    this.isPremium = data[`is_premium`];
    this.isFavorite = data[`is_favorite`];
    this.cost = data.price;
    this.name = data.title;
    this.rating = data.rating;
    this.type = data.type;
    this.coordinates = [data.location.latitude, data.location.longitude];
    this.previewImage = data[`preview_image`];
    this.images = [...data.images];
    this.bedrooms = data.bedrooms;
    this.maxAdults = data[`max_adults`];
    this.goods = [...data.goods];
    this.host.description = data.host.description;
    this.host.id = data.host.id;
    this.host.name = data.host.name;
    this.host.isPro = data.host[`is_pro`];
    this.host.avatarUrl = data.host[`avatar_url`];
    this.description = data.description;
  }


  static parseOffer(data) {
    return new ModelOffers(data);
  }

  static parseOffers(data) {
    return data.map(ModelOffers.parseOffer);
  }
}
