import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import logService from "./logService";

//Get user from localStorage
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  logs: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//Create new log
export const createLog = createAsyncThunk(
  "logs/create",
  async (logData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await logService.createLog(logData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Get user logs
export const getLogs = createAsyncThunk("logs/getAll", async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await logService.getLogs(token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

//delete log
export const deleteLog = createAsyncThunk(
  "logs/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await logService.deleteLog(id, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logSlice = createSlice({
  name: "log",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createLog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createLog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.logs.push(action.payload);
      })
      .addCase(createLog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getLogs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getLogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.logs = action.payload;
      })
      .addCase(getLogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteLog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteLog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.logs = state.logs.filter((log) => log._id != action.payload.id);
      })
      .addCase(deleteLog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = logSlice.actions;
export default logSlice.reducer;
