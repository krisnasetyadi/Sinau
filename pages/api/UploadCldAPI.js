export default function handler(req, res) {
  res.status(200).json({cloudName: `https://api.cloudinary.com/v1_1/${process.env.NEXT_CLDNRY_cloud_name}/image/upload`});
}


