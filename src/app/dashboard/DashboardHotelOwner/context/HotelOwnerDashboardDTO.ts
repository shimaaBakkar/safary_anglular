export interface HotelOwnerDashboard {

    hotel: ['name', 'address','type','cover_img',
    'images'];
    hotel_owner: [
        'Commrcical_reg_no', 'user_id'
    ];
    ordered_room: [
        'n-of-room', 'room-type', 'order-id'
    ];
    regular_booker_room: [
        'check_in', 'check_out', 'n_of_adult', 'n_of_children', 'status', 'user_id', 'room_id'
    ];
    room_img: ['image']
}

