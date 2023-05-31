import React, {FC, useState} from 'react';
import {IUser} from "../interfaces/user.interface";

interface IProps {

}

const UserPage: FC<IProps> = () => {
    const [user, setUsers] = useState<IUser[]>([]);
    return (
        <div>

        </div>
    );
};

export default UserPage;