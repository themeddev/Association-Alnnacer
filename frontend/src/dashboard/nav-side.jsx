import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  ShoppingBagIcon,
  UserCircleIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

 
export function NavSide() {
  const [open, setOpen] = useState(0);
  const [openNav, setOpenNav] = useState(false);


  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
  <div className="w-[18rem] relative z-20">
    <Card  className="h-screen fixed top-0 left-0 p-4 shadow-xl shadow-blue-gray-900/5 ">
      <Link to={'/'} className="mb-2 p-4">
        
        <span className="font-Outfit text-xl uppercase text-myBlue">
          Association Alnnacer
        </span>
      
      </Link>
      <List>
      <Accordion
          open={open === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
              <ListItemPrefix>
                <ShoppingBagIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Dashboard
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <Link to='/dashboard/activities'>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                    Activties
                </ListItem>
              </Link>
              
              <Link to='/dashboard/members'>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                    Members
                </ListItem>
              </Link>

            </List>
          </AccordionBody>
        </Accordion>

        
        <Link to='/profile'>
          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Profile
          </ListItem>
        </Link>
        <ListItem onClick={() => handleLogout()}>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  </div>
  );
}