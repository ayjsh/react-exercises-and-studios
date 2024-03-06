export default function BookList() {
   let pageTitle = "List of Books";
   let book1 =
     "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781250178657_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D";
   let book2 =
     "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781728296173_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D";
   let book3 =
     "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781250792518_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D";

   return (
     <div>
       <h3>{pageTitle}</h3>
       <img src={book1} width={200} height={300} alt="The Women by Kristin Hannah"/>
       <img src={book2}width={200}height={300}alt="The Inmate by Freida McFadden"/>
       <img src={book3} width={200} height={300} alt="A Mystery of Mysteries: The Death and Life of Edgar Allan Poe by Mark Dawidziak"/>
     </div>
   );
}