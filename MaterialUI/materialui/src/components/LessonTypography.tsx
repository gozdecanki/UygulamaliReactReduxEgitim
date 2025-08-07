import { Typography } from '@mui/material';

export const LessonTypography = () => {
  return (
    <div>
        {/* yazım stili için kullanıyoruz. variantlarda kullanıyoruz. variantlar kendine has css özellikleri taşıyor. 
        bootstrap classı gibi düşünebiliriz. otomatik olarak belirli css özelliklerini almış oluyoruz*/}
      <Typography variant='body1'>Body1 Lorem Ipsum, kısaca Lipsum, masaüstü yayıncılık ve 
        basın yayın sektöründe kullanılan taklit yazı bloku olarak tanımlanır.
         Lipsum, oluşturulacak şablon ve taslaklarda içerik yerine geçerek yazı 
         blokunu doldurmak için kullanılır.</Typography>

       <Typography variant='body2'>Body2 Lorem Ipsum, kısaca Lipsum, masaüstü yayıncılık ve 
        basın yayın sektöründe kullanılan taklit yazı bloku olarak tanımlanır.
         Lipsum, oluşturulacak şablon ve taslaklarda içerik yerine geçerek yazı 
         blokunu doldurmak için kullanılır.</Typography>

        <Typography variant='h1'>h1 GÖRÜNÜMÜ</Typography>
        <Typography variant='h2'>h2 GÖRÜNÜMÜ</Typography>
        <Typography variant='h3'>h3 GÖRÜNÜMÜ</Typography>
        <Typography variant='h4'>h4 GÖRÜNÜMÜ</Typography>
        <Typography variant='h5'>h5 GÖRÜNÜMÜ</Typography>
        <Typography variant='h6'>h6 GÖRÜNÜMÜ</Typography>
       
       
       {/* h1 görünümü css de geçerli olacak fakat asıl komponent h4 */}
        <Typography variant='h1' component='h4'>h1 GÖRÜNÜMÜ</Typography>

        {/* App.css de olan text-align değerini ezmiş olur */}
        <Typography variant='h1' component='h4' align='left'>h1 GÖRÜNÜMÜ</Typography>
        <Typography variant='h1' component='h4' align='right'>h1 GÖRÜNÜMÜ</Typography>
      
      
      
        <Typography variant='subtitle1' >Alt başlık 1</Typography>
        <Typography variant='subtitle2' >Alt başlık 2</Typography>


    </div>
  )
}


