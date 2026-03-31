export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      purchases: {
        Row: {
          id: string
          app_slug: string
          email: string
          paypal_order_id: string
          amount: number
          currency: string
          created_at: string
        }
        Insert: {
          id?: string
          app_slug: string
          email: string
          paypal_order_id: string
          amount: number
          currency?: string
          created_at?: string
        }
        Update: {
          id?: string
          app_slug?: string
          email?: string
          paypal_order_id?: string
          amount?: number
          currency?: string
          created_at?: string
        }
      }
    }
  }
}
