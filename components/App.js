import React, { useState, useEffect } from 'react';
import UserDataList from './userDataList';
import axios from 'axios';
import SearchBar from './searchBar';

const App = () => {
    const [dataList, setDataList] = useState([]);
    const [filteredList, setFiltered] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                const userData = response.data;
                setDataList(userData);
                setFiltered(userData);
            });
    }, []);
    
    const onChangeText = (text) => {
        if (text?.length) {
            const arr = dataList.filter((item, index) =>
                item.name.toLowerCase().includes(text.toLowerCase())

            )
            setFiltered(arr)
        }
        else {
            setFiltered(dataList)
        }

    }

    return (
        <div>
            <div>
                <SearchBar onChangeText={onChangeText} />
            </div>
            <UserDataList dataList={filteredList} />
        </div>

    );


}
export default App;
