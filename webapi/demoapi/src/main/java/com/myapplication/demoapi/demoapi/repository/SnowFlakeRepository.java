package com.myapplication.demoapi.demoapi.repository;

import com.myapplication.demoapi.demoapi.model.Constants;
import com.myapplication.demoapi.demoapi.model.LineItem;
import org.springframework.stereotype.Repository;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

@Repository
public class SnowFlakeRepository {

    private static final String query = "SELECT TOP 10 L_LINENUMBER \"LineNumber\", L_QUANTITY \"Quantity\", L_EXTENDEDPRICE \"Price\", L_DISCOUNT \"Discount\", L_COMMENT \"Comment\" FROM lineitem;";
    private final Properties props;
    private final String jdbcUrl;
    private Connection connection;

    public SnowFlakeRepository(){

        this.props = new Properties();
        props.put("user", "mukundnc");
        props.put("password", "Papai127#");
        props.put("db", "my_energy_consumption");
        props.put("schema", "public");
        props.put("warehouse", "COMPUTE_WH");
        props.put("role", "ACCOUNTADMIN");

        this.jdbcUrl = String.format("jdbc:snowflake://%s.snowflakecomputing.com", "kkqanin-sy88849");

    }

    private Connection GetConnection() throws SQLException {
        if(connection == null || connection.isClosed()){
            connection = DriverManager.getConnection(jdbcUrl, props);
        }
        return connection;
    }

    public List<LineItem> GetLineItems() throws SQLException {
        List<LineItem> result = new ArrayList<LineItem>();
        // Establish the connection
        Connection conn = GetConnection();
        Statement stat = conn.createStatement();
        ResultSet res = stat.executeQuery(query);
        while(res.next()){
            LineItem item = new LineItem();
            item.lineNumber = res.getInt("LineNumber");
            item.quantity = res.getFloat("Quantity");
            item.price = res.getFloat("Price");
            item.discount = res.getFloat("Discount");
            item.comment = res.getString("Comment");
            result.add(item);
        }
        conn.close();
        return result;
    }

    public boolean LoadCsv(String tableName, String filePath) throws SQLException {
        Connection conn = GetConnection();
        String query = Constants.CSV_FORMAT_QUERY;
        Statement stat = conn.createStatement();
        ResultSet res = stat.executeQuery(query);
        stat = conn.createStatement();
        query = Constants.STAGING_CREATE_QUERY;
        res = stat.executeQuery(query);
        stat = conn.createStatement();
        query = Constants.UPLOAD_FILE_QUERY;
        res = stat.executeQuery(String.format(query, filePath));
        stat = conn.createStatement();
        query = Constants.DELETE_DATA_QUERY;
        res = stat.executeQuery(String.format(query, tableName));
        stat = conn.createStatement();
        query = Constants.COPY_DATA_QUERY;
        res = stat.executeQuery(String.format(query, tableName, tableName));
        stat = conn.createStatement();
        query = Constants.REMOVE_STAGING_QUERY;
        res = stat.executeQuery(String.format(query, tableName, tableName));
        return true;
    }

}
