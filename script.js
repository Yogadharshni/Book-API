const bookCollection=async()=>{
    try{
      const url= await fetch('https://www.anapioficeandfire.com/api/books')
      const data=await url.json()
      let characters=[];
          for(const val of data){
           const name=val.name;
           const isbn=val.isbn;
           const author= val.authors[0]
           const nop= val.numberOfPages;
           const publisher= val.publisher;
           const releasedDate=val.released;
              
             let i=0; let n=5;
                while(i<n){
                  let url2=  val.characters[i];
                    i++;
                  let data2=await fetch(url2)  
                  let val2=await data2.json()
                  let result=val2.name;
                    
                      if(result != ""){
                          characters.push(result) 
                      }else{
                          n++
                      }     

                }
                document.querySelector('.infodiv').innerHTML +=`
                <div class='box'>
                <div class='bgimg'>
                <h1>${name}</h1><br>
                <p>isbn : ${isbn}</p>
                <p>Author : ${author}</p>
                <p>Number of Pages : ${nop}</p>
                <p>Publisher : ${publisher}</p>
                <p>Released On : ${releasedDate}</p>
                <p>Characters : ${characters}</p>
                <div>
                <div>
                `   
                characters = [];

          }
    }
    catch(err){
        console.log(err);
    }
}

bookCollection();

