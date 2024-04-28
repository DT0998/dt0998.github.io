import httpService from "../../http";

export const getActorPopular = async () => {
    return await httpService.get("/person/popular?");
}