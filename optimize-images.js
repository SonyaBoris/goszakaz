import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import imageminGifsicle from 'imagemin-gifsicle';

async function main() {
  const files = await imagemin(['src/assets/images/*.{jpg,png,gif}'], {
    destination: 'build/assets/images',
    plugins: [
      imageminMozjpeg({ quality: 50 }),
      imageminPngquant({
        quality: [0.6, 0.8]
      }),
      imageminGifsicle()
    ]
  });
  
  console.log(files);
  // Выводит: { data: <Buffer>, path: 'build/images/foo.jpg' }
}

main().catch((error) => {
  console.error(error);
});
