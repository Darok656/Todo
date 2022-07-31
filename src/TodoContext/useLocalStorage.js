import React from "react";

function useLocalStorange(itemName, initialValue) {
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [item, setItem] = React.useState(initialValue);
  
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localItem = localStorage.getItem(itemName);
          let parsedItem;
  
          if (!localItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localItem);
          }
  
          setItem(parsedItem);
          setLoading(false);
        } catch (error) {
          setError(error);
        }
      }, 3000);
    })
  
    const saveItem = (newItem) => {
      try {
        const stringItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringItem);
        setItem(newItem);
      } catch (error) {
        setError(error);
      }
    };
  
    return {
      item,
      saveItem,
      loading,
      error
    };
  }

  export { useLocalStorange };