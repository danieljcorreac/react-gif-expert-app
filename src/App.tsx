import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const App = () => {

  const [categories, setCategories] = useState<string[]>([ 'One Punch' ]);

  return (
    <>
      <h2>Gif Expert</h2>
      <AddCategory setCategories={ setCategories }/>
      <hr />

      <ol>
        {
          categories.map(category => 
              <GifGrid
                key={ category } 
                category={ category } />
          )
        }
      </ol>
    </>
  )
}

export default App
