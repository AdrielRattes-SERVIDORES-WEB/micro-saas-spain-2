export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      purchases: {
        Row: {
          id: string
          user_id: string
          app_slug: string
          paypal_transaction_id: string
          amount: number
          currency: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          app_slug: string
          paypal_transaction_id: string
          amount: number
          currency?: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          app_slug?: string
          paypal_transaction_id?: string
          amount?: number
          currency?: string
          created_at?: string
        }
      }
      calculations: {
        Row: {
          id: string
          user_id: string
          app_slug: string
          name: string
          inputs: Json
          outputs: Json
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          app_slug: string
          name: string
          inputs: Json
          outputs: Json
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          app_slug?: string
          name?: string
          inputs?: Json
          outputs?: Json
          created_at?: string
        }
      }
    }
  }
}
