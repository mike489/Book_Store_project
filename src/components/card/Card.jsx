import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import Button from "../Button";
import { Link } from "react-router-dom";

const SimpleCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pl-6 md:mt-8 md:items-center">
      <Card className="w-full bg-slate-500 text-cyan-50">
        <CardBody className="pl-5">
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Buy 5 or more Save $1 each
          </Typography>
          <Typography>
            Because it&apos;s about motivating the doers. Because I&apos;m here
            to follow my dreams and inspire others.
          </Typography>
        </CardBody>
        <CardFooter className="pt-10 pl-5 mb-2">
          <Link href="#" className="inline-block mt-2">
            <Button
              primary
              size="sm"
              variant="text"
              className="flex items-center gap-2 "
            >
              Shop Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </Link>
        </CardFooter>
      </Card>

      <Card className="w-full bg-slate-500 text-cyan-50">
        <CardBody className="pl-5">
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Buy 5 or more Save $1 each
          </Typography>
          <Typography>
            Because it&apos;s about motivating the doers. Because I&apos;m here
            to follow my dreams and inspire others.
          </Typography>
        </CardBody>
        <CardFooter className="pt-10 pl-5 mb-2">
          <Link href="#" className="inline-block mt-2">
            <Button
              primary
              size="sm"
              variant="text"
              className="flex items-center gap-2 "
            >
              Shop Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </Link>
        </CardFooter>
      </Card>

      <Card className="w-full bg-slate-500 text-cyan-50">
        <CardBody className="pl-5">
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Buy 5 or more Save $1 each
          </Typography>
          <Typography>
            Because it&apos;s about motivating the doers. Because I&apos;m here
            to follow my dreams and inspire others.
          </Typography>
        </CardBody>
        <CardFooter className="pt-10 pl-5 mb-2">
          <Link href="#" className="inline-block mt-2">
            <Button
              primary
              size="sm"
              variant="text"
              className="flex items-center gap-2 "
            >
              Shop Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SimpleCard;
