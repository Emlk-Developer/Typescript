"use client";

import { Dispatch, FC, SetStateAction, useState } from "react";
import { Form } from "@radix-ui/react-form";
import { useI18n } from "@/i18n/client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Button from "@/components/UI/Button/Button";
import styles from "./UserSearch.module.scss";

interface UserSearchProps {
   setIsLoading: Dispatch<SetStateAction<boolean>>;
   isLoading: boolean;
}

const UserSearch: FC<UserSearchProps> = ({ setIsLoading, isLoading }) => {
   const t = useI18n();
   const router = useRouter();
   const pathname = usePathname();
   const searchParams = useSearchParams();
   const [searchTerm, setSearchTerm] = useState(
       searchParams?.get("search") || "",
   );
   const handleSearch = () => {
       setIsLoading(true);
       let updatedSearchParams = `?search=${searchTerm}`;

       // loop over current params and build a new url up
       searchParams.forEach((value, key) => {
           if (key !== "search") {
               updatedSearchParams += `&${key}=${value}`;
           }
       });

       if (updatedSearchParams.substring(1) !== searchParams.toString()) {
           router.replace(`${pathname}${updatedSearchParams}`);
       } else {
           setTimeout(() => setIsLoading(false), 500);
       }
   };

   const handleReset = () => {
       router.replace(`${pathname}`);
       setSearchTerm("");
   };

   return (
       <div className={styles.searchField}>
           <label>{t("search.searchUsers")}</label>
           <div className={styles.inner}>
               <Form
                   className={styles.searchSection}
                   onSubmit={handleSearch}>
                   <div className={styles.field}>
                       <input
                           type='text'
                           placeholder={`${t("search.search")}...`}
                           value={searchTerm}
                           onChange={(ev) => setSearchTerm(ev.target.value)}
                           className={styles.input}
                       />
                       {/*<SearchIcon className={styles.icon} />*/}
                   </div>
                   <div className={styles.searchButtons}>
                       <Button
                           as='button'
                           variant='secondary'
                           disabled={!searchTerm || isLoading}
                           isLoading={isLoading}
                           className={styles.searchButton}>
                           {t("account.user.searchUsers")}
                       </Button>
                       {searchParams.toString() && (
                           <Button
                               as='button'
                               type='button'
                               variant='tertiary'
                               onClick={() => handleReset()}>
                               {t("search.reset")}
                           </Button>
                       )}
                   </div>
               </Form>
           </div>
       </div>
   );
};

export default UserSearch;


