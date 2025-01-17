import {Competition_Model} from './competitions'
import {Author_Model} from './author'
import {Coments_Model} from './coments'
export class Get_News_Model {
    id:number;
    title:string;
    photo:string;
    views:number;
    Competition:Competition_Model;
    description:string;
    category:number;
    author:Author_Model;
    created:string;
    coments:Coments_Model;
}
