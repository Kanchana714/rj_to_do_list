
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import {useState,useEffect} from 'react';
import Additem from './Additem';
import Search from './Search';


function App() {
   
   const API_URL='http://localhost:3000/items';
   const [items,setItems]=useState([]);
   const [newItem,setNewItem]=useState('')
   const [search,setSearch]=useState('')
   const [fetchError,setFetchError]=useState(null);
   const [isLoading,setIsLoading]=useState(true)
  useEffect(()=>
  { 
     const fetchItems=async()=>
     {
      try
      {
         const response=await fetch(API_URL);
         if(!response.ok)throw Error("data not received");
         console.log(response);
         const listItems=await response.json();
         console.log(listItems);
         setFetchError(null)
         setItems(listItems);
      }catch(err)
      {
        setFetchError(err.message)
      }
      finally{
        setIsLoading(false)
      }
     }
//(async()=>await  fetchItems())()
setTimeout(()=>{
  (async()=>await fetchItems())()
},2000
)},[])

   

   const addItem=(item)=>
   {
      const id=items.length?items[items.length-1].id+1:1;
      const addNewItem={id,checked:false,item}
      const listItems=[...items,addNewItem]
      setItems(listItems)
      
   }
   const handleSubmit=(e)=>
   {
    e.preventDefault()
    if(!newItem)return;
    addItem(newItem)
    setNewItem('')
   }
   const handlecheck=(id)=>
   {
    const listitems=items.map((item)=>item.id===id?{...item,checked:!item.checked}:item)
    setItems(listitems)

   }

   const deletecheck=(id)=>
   {
    const listitems=items.filter((item)=>item.id!==id)
    setItems(listitems)
    localStorage.setItem("todo_list",JSON.stringify(listitems))
   }
  return (
    <div>
      
      <Header title="balachandra"/>
      <Additem
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
      />
      <Search
       search={search}
       setSearch={setSearch}
       />
       <main>
          {isLoading && <p>Loading items...</p>}
          {fetchError && <p> {`Error : ${fetchError}`} </p>}
          {!isLoading && !fetchError &&<Content
          items={items.filter(item=>
            
            item.item.toLowerCase().includes(search.toLowerCase()))}
      
          handlecheck={handlecheck}
          deletecheck={deletecheck}
          />}
      </main>
      <Footer
      length={items.length}
     
      />
    </div>
  );
}

export default App;
