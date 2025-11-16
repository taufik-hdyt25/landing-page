import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { Send } from "lucide-react";
import { FaUserCheck } from "react-icons/fa";
import { IoChatbubblesSharp } from "react-icons/io5";
import { RiUser2Fill } from "react-icons/ri";
import { useFormik } from "formik";
import * as Yup from "yup";
import { actionPostComment } from "@/services/comment/comment.func";
import { useQueryClient } from "@tanstack/react-query";

interface IProps {
  params?: any;
}
const FormUcapan = ({ params }: IProps) => {
  const { mutate, isPending } = actionPostComment();
  const qc = useQueryClient();
  const formik = useFormik({
    initialValues: {
      name: params?.to || "",
      kehadiran: "",
      ucapan: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Masukan nama"),
      kehadiran: Yup.string().required("Pilih kehadiran"),
      ucapan: Yup.string().required("Masukan ucapan"),
    }),
    enableReinitialize: true,
    onSubmit: (values) => {
      mutate(
        {
          content: values.ucapan,
          attendance: values?.kehadiran,
          commentBy: values?.name || "user",
        },
        {
          onSuccess: (res) => {
            formik.resetForm();
            qc.invalidateQueries({ queryKey: ["actionGetListComment"] });
          },
        }
      );
    },
  });

  return (
    <Box border={"1px solid rgba(255,255,255,0.2)"} p={5} mt={5} rounded={"lg"}>
      <Text
        my={3}
        textAlign={"center"}
        fontSize={"2rem"}
        textStyle={"fontEsthetic"}
      >
        Ucapan & Doa
      </Text>

      <Stack spacing={3}>
        <FormControl
          color={"white"}
          isInvalid={Boolean(formik.touched.name && formik.errors.name)}
        >
          <FormLabel
            fontSize={"1rem"}
            display={"flex"}
            gap={1}
            alignItems={"center"}
          >
            <RiUser2Fill
              style={{ color: "rgba(255,255,255,0.8)", width: 24, height: 24 }}
            />{" "}
            Nama
          </FormLabel>
          <Input
            border={"1px solid rgba(255,255,255,0.2)"}
            rounded={"full"}
            name="name"
            placeholder="Masukan nama"
            disabled={params?.to !== ""}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <FormErrorMessage>Masukan nama</FormErrorMessage>
        </FormControl>
        <FormControl
          color={"white"}
          isInvalid={Boolean(
            formik.touched.kehadiran && formik.errors.kehadiran
          )}
        >
          <FormLabel
            fontSize={"1rem"}
            display={"flex"}
            gap={1}
            alignItems={"center"}
          >
            <FaUserCheck
              style={{ color: "rgba(255,255,255,0.8)", width: 24, height: 24 }}
            />{" "}
            Kehadiran
          </FormLabel>
          <Select
            border={"1px solid rgba(255,255,255,0.2)"}
            rounded={"full"}
            placeholder="Pilih kehadiran"
            name="kehadiran"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.kehadiran}
          >
            <option value="hadir">✅ Hadir</option>
            <option value="tidak-hadir">❌ Tidak bisa hadir</option>
          </Select>

          <FormErrorMessage>Pilih kehadiran</FormErrorMessage>
        </FormControl>
        <FormControl
          color={"white"}
          isInvalid={Boolean(formik.touched.ucapan && formik.errors.ucapan)}
        >
          <FormLabel
            fontSize={"1rem"}
            display={"flex"}
            gap={1}
            alignItems={"center"}
          >
            <IoChatbubblesSharp
              style={{ color: "rgba(255,255,255,0.8)", width: 24, height: 24 }}
            />{" "}
            Ucapan & Doa
          </FormLabel>
          <Textarea
            border={"1px solid rgba(255,255,255,0.2)"}
            rounded={"lg"}
            rows={5}
            name="ucapan"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.ucapan}
          />
          <FormErrorMessage>Kasih ucapanya😁</FormErrorMessage>
        </FormControl>
      </Stack>
      <Button
        w={"100%"}
        mt={5}
        rounded={"full"}
        isLoading={isPending}
        isDisabled={!(formik.dirty && formik.isValid)}
        bg={"#0A6FFD"}
        _hover={{ backgroundColor: "#0A6FFD80" }}
        leftIcon={
          <Send
            style={{ color: "rgba(255,255,255,0.8)", width: 18, height: 18 }}
          />
        }
        onClick={() => formik.handleSubmit()}
      >
        Send
      </Button>
    </Box>
  );
};

export default FormUcapan;
