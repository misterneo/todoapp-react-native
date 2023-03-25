# A Todo App using React Native

## Connecting the App to a local Laravel API

If you've made it this far, then you have successfully set up and run the project. Now, let's move on to creating a simple todo app Laravel API so that we can connect it to this React Native app using Axios.

In this guide, I will provide a step-by-step process for building a basic todo app API using Laravel. So, let's get started!

## Prerequisites

Before you start, you'll need to install the following tools:

- Laravel 10
- Mysql

## Creating a new laravel project

To connect this app with a backend server, you need to create a new Laravel 10 project using the following command:

```zsh
laravel new todo-app-laravel-api
```

- After creating the project, run the following command to generate a new Model, Migration, and Resource Controller:

```zsh
php artisan make:model Todo -m -c --resource
```

- Open the migration and add the following code:

```php
public function up(): void
{
    Schema::create('todos', function (Blueprint $table) {
        $table->id();
        $table->text('text'); // Add this
        $table->boolean('status')->default(false); // Add this
        $table->timestamps();
    });
}
```

- After updating the migration, run the migration: `php artisan migrate`.
- Next, navigate to the `routes/api.php` file and add the following resource route:

```php
Route::resource('todos', TodoController::class);
```

- Now, implement the logic to handle the requests sent to those endpoints. The code below handles all the necessary requests and their corresponding responses to successfully communicate with the frontend React Native application:

```php
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $todos = Todo::orderBy('created_at', 'desc')->get(["id", "text", "status"]);

            return response()->json([
                'status' => 200,
                'data' => $todos
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 500,
                'message' => 'An error occurred while fetching todos: ' . $th->getMessage()
            ]);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $validatedData =  $request->validate([
                'text' => 'string|max:255|required',
                'status' => 'boolean|nullable'
            ]);

            $todo = Todo::create(
                $validatedData
            );

            return response()->json([
                'status' => 201,
                'data' => $todo
            ]);
        } catch (ValidationException $e) {
            return response()->json([
                'status' => 422,
                'message' => 'Validation error: ' . $e->getMessage(),
                'errors' => $e->errors()
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 500,
                'message' => 'An error occurred while creating todo: ' . $th->getMessage()
            ]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Todo $todo)
    {
        return response()->json([
            'status' => 200,
            'data' => $todo
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Todo $todo)
    {
        try {
            $request->validate([
                'status' => 'boolean|required'
            ]);
            $todo->update($request->only('status'));
            return response()->noContent();
        } catch (ValidationException $e) {
            return response()->json([
                'status' => 422,
                'message' => 'Validation error: ' . $e->getMessage(),
                'errors' => $e->errors()
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 500,
                'message' => 'An error occurred while updating todo: ' . $th->getMessage()
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Todo $todo)
    {
        try {
            $todo->delete();

            return response()->json([
                'status' => 200,
                "message" => "Todo Deleted"
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 500,
                'message' => 'An error occurred while deleting todo: ' . $th->getMessage()
            ]);
        }
    }
```

Now all you need to do is run `php artisan serve`, and the API is ready for the application to use. Please note that if you're using an external device, you need to expose the application to your local network. To do so, run this command instead: `php artisan serve --host 0.0.0.0`. Also, go to the `api/index` file in the frontend application and update the base URL endpoint with your machine's internal IP address.

With these steps, you have successfully connected a React Native application to a Laravel API.

## Contributing

We welcome contributions from anyone interested in improving the app! Please feel free to fork the repository, make your changes, and submit a pull request for review.

## License

This project is licensed under the MIT License.
