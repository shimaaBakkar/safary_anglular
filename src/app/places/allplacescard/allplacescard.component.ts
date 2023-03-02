import { Component } from '@angular/core';
import { Iplaces } from '../iplaces'

@Component({
    selector: 'app-allplacescard',
    templateUrl: './allplacescard.component.html',
    styleUrls: ['./allplacescard.component.css']
})
export class AllplacescardComponent {
    PlacesList: Iplaces[];
    constructor() {
        this.PlacesList = [
            {
                id: 1,
                name: "Fila Temple",
                type: "outdoor",
                tiketprice: 50,
                image: "https://cnn-arabic-images.cnn.io/cloudinary/image/upload/w_1920,c_scale,q_auto/cnnarabic/2021/02/26/images/178648.webp",
                rate: 7.5,
                description: "Lorem",
                reviews: [
                    "reviews 1",
                    "Good place",
                    "Recommended"
                ]

            },

            {
                name: "Nile Cruise",
                type: "nile",
                tiketprice: 500,
                image: "https://www.egypttoursportal.com/images/2020/06/How-to-Choose-the-Best-Nile-Cruise-in-Egypt-Egypt-Tours-Portal.jpg",
                rate: 7.5,
                description: "Lorem",
                reviews: [
                    "reviews 1",
                    "Good place",
                    "Recommended"
                ],
                id: 2
            },

            {
                name: "Kato Dool Nubian House",
                type: "indoor",
                tiketprice: 50,
                image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/08/6e/9d/kato-dool-arial-view.jpg?w=1200&h=-1&s=1",
                rate: 7.5,
                description: "Lorem",
                reviews: [
                    "reviews 1",
                    "Good place",
                    "Recommended"
                ],
                id: 3
            },

            {
                name: "Safari Aswan",
                type: "safari",
                tiketprice: 50,
                image:
                    "data:image/jpeg;base64,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",
                rate: 7.5,
                description: "Lorem",
                reviews: [
                    "reviews 1",
                    "Good place",
                    "Recommended"
                ],
                id: 4
            }
        ]
    }
}