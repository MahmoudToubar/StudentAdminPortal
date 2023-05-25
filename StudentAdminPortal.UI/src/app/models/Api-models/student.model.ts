
import { Address } from "./Address.mosdel";
import { Gender } from "./Gender.model";

export interface Student{
  id:string,
  firstName:string,
  lastName:string,
  dateOfBirth:string,
  email:string,
  mobile:number,
  porfileImageUrl:string,
  genderId:string,
  gender:Gender,
  addrss:Address
}
