import { Address } from './address';
import { Phone } from './phone';

export interface Student {
    /*
     @Id
    private ObjectId objectId;
    @Indexed(unique = true)
    @NotNull
    private long studentId;
    @NotNull
    private String studentName;
    private List<Address> addressList;
    private List<Phone> phoneList;
    @Indexed(unique = true) @NotNull @Email
    private String emailAddress;
     */
    objectId?: any;
    studentId: number;
    studentName: string;
    addressList?: Address[];
    phoneList?: Phone[];
    emailAddress: string;
}
