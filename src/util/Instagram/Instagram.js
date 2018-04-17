import { parse as parseHtml } from "himalaya";

let Instagram = {
  scrapeMyFeed(url) {
    return fetch(url)
      .then(response => {
        return response.text();
      })
      .then(htmlResponse => {
        return parseHtml(htmlResponse);
      })
      .then(jsonResponse => {
        // get to the part of the body that actually has data
        const body =
          jsonResponse[2].children[3].children[3].children[0].content;

        // turn it into JSON
        const parsed = JSON.parse(body.slice(21, body.length - 1));

        // return images
        return parsed.entry_data.ProfilePage[0].graphql.user
          .edge_owner_to_timeline_media.edges;
      })
      .then(images => {
        return images.map(image => {
          return {
            imageSrc: image.node.display_url,
            imageCaption: image.node.edge_media_to_caption.edges[0].node.text,
            numComments: image.node.edge_media_to_comment.count,
            numLikes: image.node.edge_liked_by.count,
            takenAt: image.node.taken_at_timestamp,
            isVideo: image.node.is_video
          };
        });
      });
  }
};

export default Instagram;
