"use server";
import { Product } from "@/types/interfaces/products";
import axios from "axios";


export const getAllProducts = async () => {
    try {
        const res = await axios.get("https://api.escuelajs.co/api/v1/products");
        const products = res.data;
        return products as Product[];
    } catch (error) {
        console.log(error)
    }
}
