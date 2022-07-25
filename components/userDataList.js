import React from 'react';
import UserData from './UserData';

const UserDataList = ({ dataList }) => {
    const items = dataList?.map(item => {
        return (<UserData item={item} key={item.id} />);
    });
    // console.log("items----",items)
    return (
        <div >
            {items}
        </div>
    );
}
export default UserDataList;