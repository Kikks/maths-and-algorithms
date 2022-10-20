use std::io;

fn get_user_input(question: String) -> i32 {
    let mut input_line = String::new();
    println!("{}", question);
    io::stdin()
        .read_line(&mut input_line)
        .expect("Failed to read line");
    let x: i32 = input_line.trim().parse().expect("Input not an integer");

    return x;
}

fn extended_euclidean_algorithm(a: i32, b: i32) -> (i32, i32, i32) {
    if b == 0 {
        return (a, 1, 0);
    }

    let (gcd, x1, y1) = extended_euclidean_algorithm(b, a % b);

    let x = y1;
    let y = x1 - (a / b) * y1;
    return (gcd, x, y);
}

fn get_inverse(number: i32, modulo: i32) -> String {
    let (_gcd, x, _y) = extended_euclidean_algorithm(number, modulo);

    return format!(
        "The inverse of {} mod {} is: {}",
        number,
        modulo,
        if x < 0 { x + modulo } else { x }
    );
}

fn main() {
    let number = get_user_input(String::from(
        "What number would you like to the find the inverse of? ",
    ));
    let modulo = get_user_input(String::from("What modulo are you working in? "));

    let inverse = get_inverse(number, modulo);
    println!("{}", inverse);
}
