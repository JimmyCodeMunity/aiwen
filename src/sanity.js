import { createClient, SanityClient } from "@sanity/client";
import ImageBuilder from "@sanity/image-url";

export const client = createClient({
    projectId:'mvcx6uje',
    dataset:'production',
    useCdn:false,
    apiVersion:'2023-10-05'
})

const builder = ImageBuilder(client);
export const urlFor = source=>builder.image(source);