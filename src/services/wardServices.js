import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const fetchWards = createAsyncThunk(
  "wards/fetchWards",
  async () => {
    try {
      const response = await fetch(
        "https://anshtripathi-assignment-21.ansh-tripathi.repl.co/api/v1/wards"
      );
      const { wards } = await response.json();
      return wards;
    } catch (error) {
      console.log("error while fetching Wards");
    }
  }
);
export const addWard = createAsyncThunk(
  "wards/addWard",
  async (wardData) => {
    try {
      const response = await fetch(
        "https://anshtripathi-assignment-21.ansh-tripathi.repl.co/api/v1/wards",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(wardData),
        }
      );
      const ward = await response.json();
      toast.success("ward Added Successfully", { autoClose: 1000 });
      return ward;
    } catch (error) {
      console.log("error while adding");
    }
  }
);

export const editWard = createAsyncThunk(
  "wards/editWard",
  async (data) => {
    const { ward, id } = data;
    
    try {
      const response = await fetch(
        `https://anshtripathi-assignment-21.ansh-tripathi.repl.co/api/v1/wards/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(ward),
        }
      );
      const updatedWard = await response.json();
      toast.success("ward details updated", { autoClose: 1000 });
      return updatedWard;
    } catch (error) {
      console.log("error while editing");
    }
  }
);
