import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

public class LaunchPage implements ActionListener{
    JFrame frame = new JFrame();
    JButton windowButton = new JButton("New Window");

    LaunchPage(){

        windowButton.setBounds(100,160,200,40);
        windowButton.setFocusable(false);
        windowButton.addActionListener(this);
        //Need to connect to the login page
        
        frame.add(windowButton);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(420,420);
        frame.setLayout(null);
        frame.setVisible(true);

    }

}