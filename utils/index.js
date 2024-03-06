export const getImageUrl = (images) => {
  if (!images || images.length === 0)
    return "https://fastly.picsum.photos/id/184/200/200.jpg?hmac=MflhZikSXVt3rvwnx8_nAvoHdLOwJFA0B2_Mk8vQvms";
  return images[0].attributes.formats.small.url;
};
