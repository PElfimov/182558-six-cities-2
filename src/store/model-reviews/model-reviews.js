export default class ModelReviews {
  constructor(data) {
    this.id = data.id;
    this.user = {
      id: data.user.id,
      isPro: data.user[`is_pro`],
      name: data.user.name,
      avatar: data.user[`avatar_url`],
    };
    this.rating = data.rating;
    this.comment = data.comment;
    this.date = data.date;
  }


  static parseReview(data) {
    return new ModelReviews(data);
  }

  static parseReviews(data) {
    return data.map(ModelReviews.parseReview);
  }
}
