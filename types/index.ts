export interface CouponDetail {
  id: number,
  type: string
  image: {
    url: string
    height: number
    width: number
  }
  title: string
  brand: string
  brand_id: number
  category: string
  category_id: number
  public_started: string
  public_ended: string
}

export interface Coupon {
  coupon: {
    id: number,
    type: string
    image: {
      url: string
      height: number
      width: number
    }
    title: string
    brand: string
    brand_id: number
    category: string
    category_id: number
    public_started: string
    public_ended: string
  }
}
