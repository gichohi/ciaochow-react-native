import { BASE_URL } from "../constants";
import { ApiResponse, Chow, User } from "../types"

export const ApiResponseToUser = (response: ApiResponse): User => {
    const user: User = {
        email: response.user.email,
        token: response.jwt
    }

    return user;
}

export const ApiResponseToChow = (response: any): Chow => {

    console.log("ToChow", response.data);

    const json = JSON.parse(response);
    const attributes = json.data;

    console.log("Attributes", attributes);

    const title = attributes[0].Title;
    const description = attributes[0].Description;
    const imageJson = attributes[0].Image;
    const image = imageJson.data.attributes.format.medium.url;
    const imageUrl = BASE_URL + image;

    const chow: Chow = {
        title: title,
        description: description,
        image: imageUrl
    }

    console.log("Converter", chow);

    return chow;
}