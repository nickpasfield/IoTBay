import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

public class Login extends JFrame {
  final private Font mainFont = new Font("Segoe print", Font.BOLD, 18);
  JTextField tfEmail, tfPassword;
  JLabel lbWelcome;

  public void init() {

    /*** Form Panel ***/

    JLabel lbUserName = new JLabel("Username");
    lbUserName.setFont(mainFont);

    tfEmail = new JTextField();
    tfEmail.setFont(mainFont);

    JLabel lbPassword = new JLabel("Password");
    lbPassword.setFont(mainFont);

    tfPassword = new JPasswordField();
    tfPassword.setFont(mainFont);

    JPanel formPanel = new JPanel();
    formPanel.setLayout(new GridLayout(4, 1, 5, 5));
    formPanel.add(lbUserName);
    formPanel.add(tfEmail);
    formPanel.add(lbPassword);
    formPanel.add(tfPassword);

    /*** Welcome Label ***/

    lbWelcome = new JLabel();
    lbWelcome.setFont(mainFont);

    /*** Welcome Label ***/

    JButton btnOK = new JButton("Login");
    btnOK.setFont(mainFont);
    btnOK.addActionListener(new ActionListener() {

      @Override
      public void actionPerformed(ActionEvent e) {
        String firstName = tfEmail.getText();
        String lastName = tfPassword.getText();
        lbWelcome.setText("Hello" + firstName + " " + lastName);
      }

    });

    JButton btnClear = new JButton("Clear");
    btnClear.setFont(mainFont);
    btnClear.addActionListener(new ActionListener() {

      @Override
      public void actionPerformed(ActionEvent e) {
        tfEmail.setText("");
        tfPassword.setText("");
        lbWelcome.setText("");
      }

    });

    JPanel buttonsPanel = new JPanel();
    buttonsPanel.setLayout(new GridLayout(1, 2, 5, 5));
    buttonsPanel.add(btnOK);
    buttonsPanel.add(btnClear);

    JPanel mainPanel = new JPanel();
    mainPanel.setLayout(new BorderLayout());
    mainPanel.setBackground(new Color(128, 128, 255));
    mainPanel.add(formPanel, BorderLayout.NORTH);
    mainPanel.add(lbWelcome, BorderLayout.CENTER);
    mainPanel.add(buttonsPanel, BorderLayout.SOUTH);

    add(mainPanel);

    setTitle("Intro to Software");
    setSize(500, 600);
    setMinimumSize(new Dimension(300, 400));
    setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
    setVisible(true);
  }

  public static void main(String[] args) {
    Login myFrame = new Login();
    myFrame.init();
  }
}
