package com.myapplication.demoapi.demoapi.model;

public class Constants {
    public static String CSV_FORMAT_QUERY = "create or replace file format mycsvformat " +
            "type = 'CSV' field_delimiter = ',' skip_header = 1;";
    public static String STAGING_CREATE_QUERY = "create or replace stage my_csv_stage " +
            "file_format = mycsvformat;";
    public static String UPLOAD_FILE_QUERY = "put file://%s @my_csv_stage auto_compress=true overwrite=true;";
    public static String DELETE_DATA_QUERY = "DELETE FROM %s;";
    public static String COPY_DATA_QUERY = "copy into %s from @my_csv_stage/%s.csv.gz " +
            "file_format = (format_name = mycsvformat) on_error = 'skip_file';";
    public static String REMOVE_STAGING_QUERY = "remove @my_csv_stage pattern='.*.csv.gz';";

}
