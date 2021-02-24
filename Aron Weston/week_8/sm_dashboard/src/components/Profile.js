import _ from 'underscore';
import React from 'react';

const Profile = (props) => {

    console.log(_.values(props).length);
    return (
        <div>
            <img src={props.data.profile_pic_url_hd} alt="" />
            <ul>
                <li>Business Name: { props.data.full_name }</li>
                <li>Category: { props.data.business_category_name }</li>
                <li>Bio: { props.data.biography }</li>
                <li>External URL: {props.data.external_url}</li>
                <li>Private: {props.data.is_private ? 'Yes' : "No"}</li>
                <li>Business Account: {props.data.is_business_account ? 'Yes' : "No"}</li>
            </ul>
        </div>
    )

}

export default Profile;
