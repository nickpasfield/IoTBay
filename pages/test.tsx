import { Heading, Stack, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";
import {
  NextPage,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from "next";
import { client } from "../utils/client";

interface Customer {
  first_name: string;
}

const QUERY = `query {
  customer {
    first_name
  }
}`;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return client
    .query(QUERY)
    .toPromise()
    .then((d) => {
      return {
        props: { customers: d.data.customer },
      };
    })
    .catch((e) => {
      return {
        props: {},
      };
    });
};

const Home: NextPage = ({
  customers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { colorMode } = useColorMode();
  const router = useRouter();

  return (
    <>
      <Heading>Customers</Heading>
      <Stack spacing={4}>
        {customers.map((customer: any) => (
          <Stack key={customer.id}>
            <Heading size="md">{customer.first_name}</Heading>
          </Stack>
        ))}
      </Stack>
    </>
  );
};

export default Home;
